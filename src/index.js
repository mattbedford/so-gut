import { createRoot } from 'react-dom';

function MyFirstApp() {
    return <span>Hello from JavaScript!</span>;
}

const root = createRoot( document.getElementById( 'my-first-gutenberg-app' ) );
window.addEventListener(
    'load',
    function () {
        root.render(
            <MyFirstApp />,
        );
    },
    false
);
