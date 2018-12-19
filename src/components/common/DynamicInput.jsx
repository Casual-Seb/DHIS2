import React from 'react';
import {Input, Label} from 'reactstrap';

class DynamicInput extends React.Component {
    render() {
        const {name, type, id, isDropdown, options, userRole, value, handleChange} = this.props;
        const doctor = userRole.displayName === 'Doctor';

        const inputTypes = {
            TEXT: 'text',
            NUMBER: 'number',
            LONG_TEXT: 'textarea',
            INTEGER: 'number'
        };

        const approvalElementId = 'zrZADVnTtMa';
        const hidden = (approvalElementId === id && doctor);
        //Defaulting input type to text if not found
        const inputType = inputTypes[type] ? inputTypes[type] : 'text';

        return (
            <div>
                {hidden ? <Label for={id} hidden>{name}</Label> : <Label for={id}>{name}</Label>}
                {isDropdown ? <Input type={hidden ? 'hidden' : 'select'} name={name} id={id}
                                     value={value !== null ? value : ''}
                                     onChange={(event) => handleChange(event)}
                                     readOnly={!doctor && id !== approvalElementId}>{hidden ? null : options.map((opt) => {
                    return (<option key={opt.id} value={opt.code}>{opt.displayName}</option>);
                })}</Input> : <Input type={inputType} name={name} id={id} value={value !== null ? value : ''}
                                     onChange={(event) => handleChange(event)} readOnly={!doctor}></Input>}
            </div>
        );
    }
}

export default DynamicInput;
