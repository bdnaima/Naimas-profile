import React from "react";
import Toggle from "./Toggle";
import { CgIfDesign } from 'react-icons/cg'

const Dropdown = ({ skills = [] }) => {

    return (

        <Toggle title="Design" icon={<CgIfDesign className="skills_icon" />}>
            <div className="skills_list">
                {skills.map(skill => (
                    <div key={skill.id}>
                        <div className="skills_title">
                            <h3 className="skills_name">{skill.name}</h3>
                            <span className="skills_number">{skill.percentage}%</span>
                        </div>
                        <progress className="progress_bar" value={skill.percentage} max="100"></progress>

                    </div>

                ))}
            </div>
        </Toggle>



    )
}

export default Dropdown;