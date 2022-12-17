import React from "react";
import { BiCodeCurly } from 'react-icons/bi'
import Toggle from "./Toggle";

const Frontend = ({ skills = [] }) => {

    return (

        <Toggle title="Frontend" icon={<BiCodeCurly className="skills_icon" />}>
            <div className="skills_list">
                {skills.map(skill => (
                    <div key={skill.id}>
                        <div className="skills_title">
                            <h3 className="skills_name">{skill.name}</h3>
                            <span className="skills_number">{skill.percentage}%</span>
                        </div>
                        <progress value={skill.percentage} max="100"></progress>
                    </div>

                ))}
            </div>
        </Toggle>

    )
}

export default Frontend;