export function defaults() {
    return {
        type: 'DEFAULTS',
        worksMenuVisible: false,
        selectedOutfit: 'LowEnd',
        dragging: false,
        dragCoords: null,
        worksVisible: [
            {name: 'works', x: 800, y: 140, x2: 800, y2: 140},
            {id: 3, name: 'carmonica', visible: false, x: 200, y:170, x2: 200, y2: 170},
            {id: 9, name: 'pink', visible: false, x: 400, y: 300, x2: 400, y2: 300},
            {id: 11, name: 'twelve', visible: false, x: 600, y: 500, x2: 600, y2: 500},
            {id: 13, name: 'raitre', visible: false, x: 100, y: 680, x2: 100, y2: 680}
        ],
        topZIndex: 10,
        allZIndex: [
            {name: 'works', zIndex: null},
            {name: 'carmonica', zIndex: null},
            {name: 'pink', zIndex: null},
            {name: 'twelve', zIndex: null},
            {name: 'raitre', zIndex: null},
        ]
    };
}

export function windowMounted(windowMounted) {
    return {
        type: 'WINDOW_MOUNTED',
        windowMounted: windowMounted
    }
}

export function windowUnmounted(windowUnmounted) {
    return {
        type: 'WINDOW_UNMOUNTED',
        windowUnmounted: windowUnmounted
    }
}

export function bringWindowToFront(windowToFront) {
    return {
        type: 'BRING_WINDOW_TO_FRONT',
        windowToFront: windowToFront
    }
}

export function toggleWorksMenu(visible) {
    return {
        type: 'TOGGLE_WORKS_MENU',
        worksMenuVisible: !visible
    }
}

export function toggleWork(work) {
    return {
        type: 'TOGGLE_WORK',
        work: work
    }
}

export function closeTopWindow(visible) {
    return {
        type: 'CLOSE_TOP_WINDOW',
        worksMenuVisible: !visible,
    }
}

export function changeSelectedOutfit(outfit) {
    return {
        type: 'CHANGE_SELECTED_OUTFIT',
        selectedOutfit: outfit
    };
}

export function toggleDragging(what) {
    return {
        type: 'TOGGLE_DRAGGING',
        what: what
    }
}

export function setInitialCoords(x, component) {
    return {
        type: 'SET_INITIAL_COORDS',
        component: component,
        coords: x
    }
}

export function setDragCoords(x, component) {
    return {
        type: 'SET_DRAG_COORDS',
        component: component,
        coords: x
    }
}
