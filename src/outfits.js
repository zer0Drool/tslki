import React from 'react';
import { connect } from 'react-redux';
import { changeSelectedOutfit } from './actions.js'

class Outfits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.outfitsHandleKeyDown = this.outfitsHandleKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener("keydown", this.outfitsHandleKeyDown);
    }

    outfitsHandleKeyDown(e) {
        if (e.keyCode === 71) {
            this.props.changeSelectedOutfit('shades');
            this.highlightSelectedOutfitButton('shades');
        }

        if (e.keyCode === 83) {
            this.props.changeSelectedOutfit('speedo');
            this.highlightSelectedOutfitButton('speedo');
        }

        if (e.keyCode === 76) {
            this.props.changeSelectedOutfit('lowEnd');
            this.highlightSelectedOutfitButton('lowEnd');
        }

        if (e.keyCode === 72) {
            this.props.changeSelectedOutfit('hats');
            this.highlightSelectedOutfitButton('hats');
        }

        if (e.keyCode === 68) {
            this.props.changeSelectedOutfit('driving');
            this.highlightSelectedOutfitButton('driving');
        }

        if (e.keyCode === 66) {
            this.props.changeSelectedOutfit('busta');
            this.highlightSelectedOutfitButton('busta');
        }
    }

    highlightSelectedOutfitButton(outfit) {
        for (var val in this.refs) {
            if (val === 'shades' || val === 'speedo' || val === 'lowEnd' || val === 'hats' || val === 'driving' || val === 'busta') {
                if (this.refs[val].classList.contains('on')) {
                    this.refs[val].classList.remove('on')
                }
            }
            this.refs[outfit].classList.add('on');
        }
    }

    render() {

        const { selectedOutfit } = this.props

        var outfitBackgroundOne = 'images/' + selectedOutfit + '1.gif';
        var outfitBackgroundTwo = 'images/' + selectedOutfit + '2.gif';

        return (
            <div className="outfits">
                <div className="outfitsImageWrap" ref="outfitOne" style={{backgroundImage: "url(" + outfitBackgroundOne + ")"}}></div>
                <div className="outfitsImageWrap" ref="outfitTwo" style={{backgroundImage: "url(" + outfitBackgroundTwo + ")"}}></div>

                <div className="controls">
                    <div className="controlsRow">
                        <div className="controlsOption" ref="shades"><a onClick={() => {this.props.changeSelectedOutfit('shades'); this.highlightSelectedOutfitButton('shades')}}>Glasses</a></div>
                        <div className="controlsOption" ref="speedo"><a onClick={() => {this.props.changeSelectedOutfit('speedo'); this.highlightSelectedOutfitButton('speedo')}}>Speedo</a></div>
                        <div className="controlsOption on" ref="lowEnd"><a onClick={() => {this.props.changeSelectedOutfit('lowEnd'); this.highlightSelectedOutfitButton('lowEnd')}}>LowEnd</a></div>
                    </div>
                    <div className="controlsRow">
                        <div className="controlsOption" ref="hats"><a onClick={() => {this.props.changeSelectedOutfit('hats'); this.highlightSelectedOutfitButton('hats')}}>Hats</a></div>
                        <div className="controlsOption" ref="driving"><a onClick={() => {this.props.changeSelectedOutfit('driving'); this.highlightSelectedOutfitButton('driving')}}>Driving</a></div>
                        <div className="controlsOption" ref="busta"><a onClick={() => {this.props.changeSelectedOutfit('busta'); this.highlightSelectedOutfitButton('busta')}}>Busta</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedOutfit: state.selectedOutfit && state.selectedOutfit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSelectedOutfit(outfit) {
            dispatch(changeSelectedOutfit(outfit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Outfits)
