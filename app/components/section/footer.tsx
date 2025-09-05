export default function Footer() {
    return (
        <footer>
            <div className="container">
                <form>
                    <div>
                        <h3>Ship rn.</h3>
                        <p>{`genius(you) -> v0 -> genius(me) -> ship`}</p>
                    </div>
                    <input placeholder="What do your friends call you? (chad)" />
                    <input type="email" />
                    <textarea placeholder="I'll need to know how the site should look like, mumbo jumbo is allowed"></textarea>
                    <a href="#">How it works?</a>
                </form>
                <div>
                    <span>@dev0xgenius</span>
                    <span>
                        Copyright (c) 2025 Author. All Rights Reserved. l
                    </span>
                </div>
            </div>
        </footer>
    );
}
