

const AskQues = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Frequently Asked Question</h1>
            <p className="text-center">Quick answer to help you get the most out og our app</p>
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border-2">
                <div className="collapse-title font-semibold">is the app free to use?</div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
                <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border-2r">
                    <div className="collapse-title font-semibold">can i use multiple emploee to the job?</div>
                    <div className="collapse-content text-sm">
                        Click the "Sign Up" button in the top right corner and follow the registration process.
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border-2">
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">
                        Click the "Sign Up" button in the top right corner and follow the registration process.
                    </div>
                      <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border-2">
                    <div className="collapse-title font-semibold"></div>
                    <div className="collapse-content text-sm">
                        Click the "Sign Up" button in the top right corner and follow the registration process.
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AskQues;