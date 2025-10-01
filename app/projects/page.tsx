import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="card p-4 rounded-md">
                <figure className="image-full">
                    <Image
                        src="/nice-bg.jpg"
                        alt="project image"
                        width={360}
                        height={480}
                    />
                </figure>
                <div className="card-body gap-8 p-0 py-8">
                    <div className="list gap-4">
                        <span className="card-title">Multi Step Form</span>
                        <p>
                            Lorem ipsum idet elixir test Lorem ipsum idet elixir
                            test Lorem ipsum idet elixir test Lorem ipsum idet
                            elixir test. Lorem ipsum idet elixir test
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <span className="badge badge-neutral">react</span>
                        <span className="badge">MUI</span>
                        <span className="badge badge-outline">
                            react-router
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <b>Estimation</b> 48hours
                        </span>
                        <span>
                            <b>Design Credits </b>
                            <a href="#">Frontend Mentor</a>
                        </span>
                        <span className="flex gap-4">
                            <b>Featured </b>
                            <span className="flex gap-2">
                                <span>FEM</span>
                                <span>Authentication Paradox - JWTs</span>
                                <span></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn">View Code</button>
                    <button className="btn btn-link">View Site</button>
                </div>
            </div>
            <div className="card p-4 rounded-md">
                <figure className="image-full">
                    <Image
                        src="/nice-bg.jpg"
                        alt="project image"
                        width={360}
                        height={480}
                    />
                </figure>
                <div className="card-body gap-8 p-0 py-8">
                    <span className="card-title">Multi Step Form</span>
                    <p>
                        Lorem ipsum idet elixir test Lorem ipsum idet elixir
                        test Lorem ipsum idet elixir test Lorem ipsum idet
                        elixir test. Lorem ipsum idet elixir test
                    </p>
                    <div className="flex gap-2">
                        <span className="badge badge-neutral">react</span>
                        <span className="badge">MUI</span>
                        <span className="badge badge-outline">
                            react-router
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <b>Estimation</b> 48hours
                        </span>
                        <span>
                            <b>Design Credits </b>
                            <a href="#">Frontend Mentor</a>
                        </span>
                        <span className="flex gap-4">
                            <b>Featured </b>
                            <span className="flex gap-2">
                                <span>FEM</span>
                                <span>Authentication Paradox - JWTs</span>
                                <span></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn">View Code</button>
                    <button className="btn btn-link">View Site</button>
                </div>
            </div>
        </>
    );
}
