import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import WelcomePage from "../pages/WelcomePage/WelcomePage.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/WelcomePage">
                <WelcomePage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews