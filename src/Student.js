import React, { Component } from 'react';
import './Student.css';

class Student extends Component {

    constructor() {
        super();
        this.state = {
            score: 0,
            success: false,
            loss: false
        }
    }

    componentDidMount() {
        this.setState({
            score: this.props.score
        });
    }

    addScore() {
        this.setState({
            score: this.state.score + 1
        },
            () => {
                if(this.state.score >= 350) {
                    this.setState({ success: true} )
                }
            }
        )
    }

    decScore() {
        this.setState({
            score: this.state.score - 1
        },
            () => {
                if(this.state.score <= 340) {
                    this.setState({ loss: true} )
                }
            }
        )
    }

    render() {

        const isSuccess = this.state.success;
        let success;
        if(isSuccess) {
            success =  <span className="success">Success</span>
        } else {
                success = '';
        }

        const isLoss = this.state.loss;
        let loss;
        if(isLoss) {
            loss =  <span className="loss">Loss</span>
        } else {
                loss = '';
        }

        return(
            <div className="student">
                <div className="left">
                    <h2 className="studentName">
                        {this.props.name}
                        <button className="addScoreBtn" onClick = {() => this.addScore()}>+</button>
                        <button className="decScoreBtn" onClick = {() => this.decScore()}>-</button>
                    </h2>
                    <p className="universityName">{this.props.university} {success} {loss}</p>
                </div>
                <div className="right">
                    <p className="score">{this.state.score}</p>
                </div>
            </div>
        );
    }
}
export default Student;