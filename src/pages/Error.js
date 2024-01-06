import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    return(
        <>
        <MainNavigation/>
        <main>
            <h1>An error occured</h1>
            <p>Please check you entered the right url</p>
        </main>
        </>
    )
};

export default ErrorPage;