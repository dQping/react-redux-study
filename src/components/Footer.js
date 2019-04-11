import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const { filter, setFilterAction } = this.props
        return (
            <div>
                <span>Show:</span>
                <button
                    disabled={filter === 'All'}
                    onClick={() => {
                        setFilterAction('All')
                    }}
                >
                    All
                </button>
                <button
                    disabled={filter === 'Active'}
                    onClick={() => {
                        setFilterAction('Active')
                    }}
                >
                    Active
                </button>
                <button
                    disabled={filter === 'Completed'}
                    onClick={() => {
                        setFilterAction('Completed')
                    }}
                >
                    Completed
                </button>
            </div>
        )
    }
}
