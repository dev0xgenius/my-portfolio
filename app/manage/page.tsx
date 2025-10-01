"use client";

import { useState } from "react";
import ProjectForm from "../components/project-form";

export default function Page() {
    const [tabs, setTabs] = useState([true, false]);

    const switchTab = () => {
        setTabs((tabs) => tabs.map((tab) => !tab));
    };

    return (
        <div className="p-4 flex flex-col gap-4">
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label="Projects"
                    defaultChecked={tabs[0]}
                    onClick={switchTab}
                />
                <div className="tab-content bg-base-100 border-base-300 p-4">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Completed</div>
                            <div className="stat-value">5</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">In Progress</div>
                            <div className="stat-value">2</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Pending</div>
                            <div className="stat-value">4</div>
                        </div>
                    </div>
                </div>
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label="Blogs"
                    defaultChecked={tabs[1]}
                    onClick={switchTab}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    Blogs
                </div>
            </div>
            <ProjectForm />
        </div>
    );
}
