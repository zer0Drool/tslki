import React from 'react';
import Nav from './nav.js';
import Outfits from './outfits.js'
import Works from './works.js'
import Carmonica from './carmonica.js'
import Pink from './pink.js'
import Twelve from './twelve.js'
import Raitre from './raitre.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.showWorks = this.showWorks.bind(this)
        this.hideWorks = this.hideWorks.bind(this)
        this.showCarmonica = this.showCarmonica.bind(this)
        this.showPink = this.showPink.bind(this)
        this.showTwelve = this.showTwelve.bind(this)
        this.showRaitre = this.showRaitre.bind(this)
    }

    componentDidMount() {
        // window.addEventListener("keydown", this.handleKeyDown, true);
    }

    showWorks() {
        if (this.state.worksIsVisible) {
            this.setState({
                worksIsVisible: false
            })
        } else {
            this.setState({
                worksIsVisible: true
            })
        }
    }

    hideWorks() {
        this.setState({
            worksIsVisible: false
        })
    }

    showCarmonica() {
        if (this.state.carmonicaIsVisible) {
            this.setState({
                carmonicaIsVisible: false
            })
        } else {
            this.setState({
                carmonicaIsVisible: true
            })
        }
    }

    showPink() {
        if (this.state.pinkIsVisible) {
            this.setState({
                pinkIsVisible: false
            })
        } else {
            this.setState({
                pinkIsVisible: true
            })
        }
    }

    showTwelve() {
        if (this.state.twelveIsVisible) {
            this.setState({
                twelveIsVisible: false
            })
        } else {
            this.setState({
                twelveIsVisible: true
            })
        }
    }

    showRaitre() {
        if (this.state.raitreIsVisible) {
            this.setState({
                raitreIsVisible: false
            })
        } else {
            this.setState({
                raitreIsVisible: true
            })
        }
    }

    render() {

        return (
            <div>
                <Nav
                    showWorks = {this.showWorks}
                />
                <Outfits />
                {this.state.worksIsVisible && <Works
                    showWorks ={this.showWorks}
                    hideWorks ={this.hideWorks}
                    showCarmonica ={this.showCarmonica}
                    showPink ={this.showPink}
                    showTwelve ={this.showTwelve}
                    showRaitre ={this.showRaitre}
                />}
                {this.state.carmonicaIsVisible && <Carmonica
                    showCarmonica ={this.showCarmonica}
                />}
                {this.state.pinkIsVisible && <Pink
                    showPink ={this.showPink}
                />}
                {this.state.twelveIsVisible && <Twelve
                    showTwelve ={this.showTwelve}
                />}
                {this.state.raitreIsVisible && <Raitre
                    showRaitre ={this.showRaitre}
                />}
            </div>
        )
    }
}
