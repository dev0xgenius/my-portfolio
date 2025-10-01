import { BsMarkdown } from "react-icons/bs";

export default function ProjectForm() {
    return (
        <form className="card w-fit">
            <div className="card-body px-0 gap-6">
                <div className="flex flex-col gap-4">
                    <label className="floating-label">
                        <span>Project Title</span>
                        <input
                            type="text"
                            name="title"
                            placeholder="Project Title"
                            className="input input-md"
                        />
                    </label>
                    <label className="floating-label">
                        <span>Description</span>
                        <textarea
                            className="textarea"
                            placeholder="Describe this project"
                        ></textarea>
                    </label>
                </div>
                <div className="flex flex-col gap-8">
                    <label className="input">
                        <span className="label">https://</span>
                        <input type="url" placeholder="your-project.com" />
                    </label>
                    <div className="flex sm:flex-wrap gap-4">
                        <select
                            className="select"
                            defaultValue={"Current Status"}
                        >
                            <option disabled={true}>Current Status</option>
                            <option>Completed</option>
                            <option>In Progress</option>
                            <option>Pending</option>
                        </select>
                        <label className="floating-label">
                            <span>Screenshot</span>
                            <input
                                type="file"
                                placeholder="Choose image"
                                name="image"
                                className="file-input"
                            />
                        </label>
                    </div>
                </div>
                <div className="border border-primary flex flex-col relative h-auto">
                    <span className="badge badge-primary m-auto mr-0">
                        <BsMarkdown />
                        <span>MDX</span>
                    </span>
                    <textarea
                        className="textarea textarea-lg w-full border-0 focus:outline-0 bg-transparent"
                        placeholder="Fill in any extra information"
                    ></textarea>
                </div>
                <div className="card-actions justify-between">
                    <button
                        type="submit"
                        className="btn btn-neutral rounded-md"
                    >
                        Add Project
                    </button>
                </div>
            </div>
        </form>
    );
}
