export default function Footer() {
    return (
        <footer className="px-4">
            <form className="flex flex-col gap-2">
                <h3 className="font-semibold text-xl">Reach Out</h3>
                <div className="flex flex-col gap-2">
                    <label className="input block">
                        <input type="email" placeholder="youremail@gmail.com" />
                    </label>
                    <textarea
                        placeholder="Write a description of the kind of web site/app you want...."
                        className="textarea"
                    ></textarea>
                </div>
                <button className="btn rounded-sm">Start Building</button>
                <div className="bg-accent rounded-sm p-2">
                    <span className="text-sm">
                        Site typically ready within 5mins
                    </span>
                </div>
            </form>
        </footer>
    );
}
