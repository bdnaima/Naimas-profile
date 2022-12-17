import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Toggle = ({ children, title, icon }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open)


    return (
        <div className="container">
            <div
                className="skills_expander"
                tabIndex={0}
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}>


                {icon}
                <h1 className="skills_header_title">{title}</h1>
                <div>
                    <p>{open
                        ?
                        <FiChevronUp className="chevron-down skills_arrow" />
                        :
                        <FiChevronDown className="chevron-down skills_arrow" />
                    }
                    </p>
                </div>
            </div>

            {open && children}
        </div>
    )
}

export default Toggle;