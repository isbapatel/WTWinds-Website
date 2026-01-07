export default function Home() {
    return (
        <div className="container text-center mt-5">
            <h1 className="fw-bold">WT Winds</h1>
            <p className="lead">Professional Training & Internship Platform</p>

            <div className="row mt-4">
                <div className="col-md-4">
                    <i className="bi bi-code-slash fs-1 text-primary"></i>
                    <h5 className="mt-2">Web Development</h5>
                </div>

                <div className="col-md-4">
                    <i className="bi bi-phone fs-1 text-success"></i>
                    <h5 className="mt-2">App Development</h5>
                </div>

                <div className="col-md-4">
                    <i className="bi bi-briefcase fs-1 text-warning"></i>
                    <h5 className="mt-2">Internships</h5>
                </div>
            </div>
        </div>
    );
}
