import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Redirect } from 'react-router-dom';

import '../scss/_reportlist.scss';

class ReportList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    handleEdit(row) {
        //Navigate to form with row.event
        this.props.getReport(row.event);
        this.setState({ redirect: true });
    }

    fetchData(state) {
        let filter = this.props.filter;

        filter.page = state.page + 1;
        this.props.updateFilter(filter);
        if (this.props.user !== null) {
            this.props.getReports();
        }
    }

    getStatus(orderId) {
        //TODO get from optionset from API and store in store
        const optionSet = 'MfRa7PD2tkj';
        if (this.props.options !== null) {
            const status = this.props.options.filter(
                o => o.optionSet.id === optionSet && o.code === orderId
            )[0];
            return status ? status.displayName : 'Invalid status';
        }
        return 'Loading...';
    }
    render() {
        const { loading, baseURL } = this.props;
        if (this.props.userRole !== null) {
            switch (this.props.userRole.displayName) {
                case 'Doctor':
                    this.buttonLable = 'Edit';
                    break;
                default:
                    this.buttonLable = 'View';
                    break;
            }
        }

        if (this.state.redirect) {
            return <Redirect to={baseURL + 'submit'} />;
        }

        const data = this.props.reports.events;

        const columns = [
            {
                id: 'eventDate',
                Header: 'Date',
                accessor: ed =>
                    ed.eventDate && ed.eventDate !== null && ed.eventDate !== ''
                        ? ed.eventDate.substr(0, 10)
                        : '',
                filterable: false,
            },
            {
                id: 'status',
                Header: 'Status',
                accessor: e =>
                    e.dataValues.filter(x => x.dataElement === 'zrZADVnTtMa')[0]
                        ? this.getStatus(
                              e.dataValues.filter(
                                  x => x.dataElement === 'zrZADVnTtMa'
                              )[0].value
                          )
                        : 'No status',
                filterable: false,
            },
            {
                Header: 'Name',
                accessor: 'storedBy',
                filterable: false,
            },
            {
                id: 'edit',
                accessor: 'id',
                Cell: row => (
                    <button
                        className="btn btn-edit"
                        onClick={() => this.handleEdit(row.original)}
                    >
                        {this.buttonLable}
                    </button>
                ),
                filterable: false,
            },
        ];
        return (
            <div className="container">
                <ul className="breadcrumbs">
                    <li>
                        <p />
                    </li>
                </ul>
                <h1>View All</h1>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    onFetchData={this.fetchData}
                    showPageSizeOptions={false}
                    sortable={false}
                    manual
                    loading={loading}
                    loadingText={'Loading...'}
                    pages={this.props.reports.pager.pageCount}
                    noDataText={'No rows found'}
                />
            </div>
        );
    }
}

export default ReportList;
