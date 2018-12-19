import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardText, Form, FormGroup, Input, Label} from 'reactstrap';
import DynamicInput from './common/DynamicInput';
import moment from 'moment';
import {Link} from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Success from '../components/Success';

import '../scss/_submit.scss';


class Submit extends Component {
    componentWillUnmount() {
        //Clearing report in state when exiting submit
        this.props.updateForm(null);
        this.props.clearSuccess(null);
    }

    handleDateChange(date) {
        const oldReport = this.props.report;
        //Event date cannot be changed for events that already exist
        if (oldReport === null || !oldReport.event) {
            const newReport = {...oldReport, eventDate: date.format('YYYY-MM-DD')};
            this.props.updateForm(newReport);
        }
    }

    handleChange(event) {
        const dataValue = {dataElement: event.target.id, value: event.target.value};
        let oldReport = this.props.report;
        let oldDataValues = (oldReport !== null && oldReport.dataValues) ? oldReport.dataValues : [];
        if (oldDataValues !== null) {//Array exists
            const oldProperty = oldDataValues.filter(x => x.dataElement === dataValue.dataElement)[0];
            if (oldProperty) {//Old property exists
                const newDataValues = oldDataValues.map(element => element.dataElement === dataValue.dataElement ? {
                    ...element,
                    value: dataValue.value
                } : element);
                const newReport = {...oldReport, dataValues: newDataValues};
                this.props.updateForm(newReport);
            }
            else {//Property does not exist, but array does
                const newDataValues = [...oldDataValues, dataValue];
                const newReport = {...oldReport, dataValues: newDataValues};
                this.props.updateForm(newReport);
            }
        }
    }

    handleNoteChange(event){
        const newNote = {
            value: event.target.value
        };
        this.props.updateNote(newNote);
    }

    handleNoteSubmit(event){
        event.preventDefault();
        this.props.postNote(this.props.note, this.props.report.event);
    }

    handleSubmit(event) {
        event.preventDefault();
        let report = this.props.report;
        if (report !== null && !report.eventDate) {
            report = {...report, eventDate: moment().format('YYYY-MM-DD')};
        }

        const approvalId = 'zrZADVnTtMa';

        if (report !== null && report.event) {//EventId exists - PUT
            this.props.putReport(report, report.event);
        }
        else if (report !== null) {//EventId does not exist - POST
            if (this.props.userRole.displayName === 'Doctor') {
                const approvalObj = {dataElement: approvalId, value: 3};
                const newDataValues = [...report.dataValues, approvalObj];
                report = {...report, dataValues: newDataValues};
            }
            this.props.postReport(report);
        }
    }

    render() {
        const {form, options, userRole, report, note, success, loading, noteSuccess, baseURL} = this.props;
        if (noteSuccess !== null && noteSuccess){
            this.props.clearNote();
            this.props.getReport(report.event);
        }
        return (
            <div className="container">
                <ul className="breadcrumbs">
                    <li>
                        <Link to={baseURL}>View All</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <p>Reg. New</p>
                    </li>
                </ul>
                {success === true ? <Success message='Report saved!'/> : null}
                <h1>Daily Log</h1>
                <div className="card mb-3">
                    <div className="card-header">
                        <DatePicker
                            selected={(report !== null && report.eventDate) ? moment(report.eventDate) : moment()}
                            onChange={date => this.handleDateChange(date)}
                            dateFormat="YYYY-MM-DD"
                            todayButton={'Today'}
                            withPortal
                            className='datepicker-submit'
                        />
                    </div>
                    <div className="card-body">
                        <h3>Submit a new daily log</h3>
                        <Form onSubmit={event => this.handleSubmit(event)}>
                            {loading ? <i className='fas fa-spinner fa-spin'></i> :

                                <FormGroup>
                                    {form.programStageDataElements.map(
                                        (input) => {
                                            return (
                                                <DynamicInput
                                                    isDropdown={input.dataElement.optionSetValue}
                                                    key={input.dataElement.id}
                                                    name={input.dataElement.name}
                                                    type={input.dataElement.valueType}
                                                    id={input.dataElement.id}
                                                    options={options.filter(o => (input.dataElement.optionSet && o.optionSet.id === input.dataElement.optionSet.id))}
                                                    userRole={userRole}
                                                    value={(report !== null && report.dataValues && report.dataValues.filter(x => x.dataElement === input.dataElement.id)[0]) ? report.dataValues.filter(x => x.dataElement === input.dataElement.id)[0].value : null}
                                                    handleChange={(event) => this.handleChange(event)}

                                                />
                                            );
                                        }
                                    )}
                                </FormGroup>
                            }
                            <Button>Submit</Button>
                        </Form>
                        {(report !== null && report.event) ?
                        <Form onSubmit={event => this.handleNoteSubmit(event)}>
                            <FormGroup>
                                <Label>Note</Label>
                               <Input type='textarea' id='new-note' value={note !== null ? note.value: ''} onChange={(event)=>this.handleNoteChange(event)}></Input>
                            </FormGroup>
                            <Button>
                                Add note
                            </Button>
                        </Form>
                        : ''
                        }
                        <Label>Notes</Label>
                        {(report !== null && report.notes) ?
                        report.notes.map((note)=>{
                            return (
                                <Card className='note-card'key={note.note}>
                                    <CardHeader>
                                        {moment(note.storedDate).format('DD-MM-YYYY, H:m:s')}
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            {note.value}
                                        </CardText>
                                    </CardBody>
                                    <CardFooter>
                                        Written by: {note.storedBy}
                                    </CardFooter>
                                </Card>
                            );
                        }): ''
                }
                    </div>
                </div>
            </div>

        )
            ;
    }
}

export default Submit;
