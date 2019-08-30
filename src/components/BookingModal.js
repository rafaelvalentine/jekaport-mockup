import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

// components
import PickSeat from './PickSeat';
 
export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <PickSeat closeModal={closeModal} />
                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                </Modal>
            </section>
        );
    }
}