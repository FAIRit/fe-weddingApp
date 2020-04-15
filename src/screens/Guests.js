import React, { Component } from 'react';
import { compose } from 'recompose';
import { withAuthorization } from '../components/Session';
import { withFirebase } from '../components/Firebase';
import * as ROLES from '../constants/roles';

function Guests() {
    return (
        <div>
            <GuestList />
        </div>
    )
}

const AllGuests = ({ guests }) => (
    <ul>
        {guests.map(guest => (
            <SingleGuest key={guest.uid} guest={guest} />
        ))}
    </ul>
);
const SingleGuest = ({ guest }) => (
    <li>
        <strong>{guest.userId}</strong> {guest.text}
    </li>
);

class GuestsBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            guests: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.guests().on('value', snapshot => {
            const guestObject = snapshot.val();
            if (guestObject) {
                const guestsList = Object.keys(guestObject).map(key => ({
                    ...guestObject[key],
                    uid: key,
                }));
                this.setState({
                    loading: false,
                    guests: guestsList
                });
            } else {
                this.setState({ guests: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.guests().off();
    }
    render() {
        const { guests, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {guests ? (
                    <AllGuests guests={guests} />
                ) : (
                        <div>There are no guests yet...</div>
                    )}
            </div>
        );
    }



}

const condition = authUser =>
    authUser && (!!authUser.roles[ROLES.BRIDE] || !!authUser.roles[ROLES.GROOM]);
const GuestList = withFirebase(GuestsBase);
export default compose(
    withAuthorization(condition),
)(Guests);
