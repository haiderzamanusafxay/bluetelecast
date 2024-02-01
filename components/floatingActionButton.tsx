import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { animateScroll as scroll} from "react-scroll"

export default function FloatingActionButton() {
    return (
        <a className="floating-action-button" onClick={() => scroll.scrollToTop()} >
            <span className="icon is-large"><FontAwesomeIcon icon={faArrowUp as IconProp} /></span>
        </a>
    );
}