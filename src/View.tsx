import Facts from "./Views/Facts"
export default function Main({path}: {path:string}) {
    switch (path){
        case "facts": {
            return <Facts></Facts>
        }
        case "story": {
            return <>
                <h2>Story</h2>
            </>
        }
        case "style": {
            return <>
                <h2>Style</h2>
            </>
        }
        case "preview": {
            return <>
                <h2>Preview</h2>
            </>
        }
        case "help": {
            return <>
                <h2>Help</h2>
            </>
        }
        case "about": {
            return <>
                <h2>About</h2>
            </>
        }
    }

}