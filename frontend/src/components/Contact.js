export default function Contact() {
    return (
        <div className="container mt-5">
            <h2><i className="bi bi-envelope-at"></i> Contact Us</h2>
            <hr />

            <div className="card p-4 shadow-sm">
                <p className="mb-2">
                    For any queries or support, please contact us via email:
                </p>

                <h5>
                    <a
                        href="mailto:suryanshchoudhary.wtwinds@gmail.com"
                        className="link-primary text-decoration-none"
                    >
                        <i className="bi bi-envelope-fill"></i>{" "}
                        suryanshchoudhary.wtwinds@gmail.com
                    </a>
                </h5>

                <p className="mt-3 text-muted">
                    Click on the email address to send us your query directly.
                </p>
            </div>
        </div>
    );
}
