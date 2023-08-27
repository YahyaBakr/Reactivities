import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Container>
            <h1>Home Pagee</h1>
            <h3>
                Go To <Link to='/activities'>Activities</Link>
            </h3>
        </Container>
    );
}