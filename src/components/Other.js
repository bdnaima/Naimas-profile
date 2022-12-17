import React from "react";
import { GiTeamIdea } from 'react-icons/gi'

import Toggle from "./Toggle";

const Dropdown = ({ skills = [] }) => {
    return (
        <Toggle title="Other skills" icon={<GiTeamIdea className="skills_icon" />}>
            <div className="skills_list_other">
                {skills.map(skill => (
                    <div className="skills_list_other" key={skill.id}>
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">{skill.name}</h3>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </Toggle>)
}

export default Dropdown;