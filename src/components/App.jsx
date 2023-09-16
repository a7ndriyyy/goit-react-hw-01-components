import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendList';
import TransactionHistory from './Transaction/transactions';
import css from 'App.module.css';

import transactions from '../components/json/transaction.json';
import friends from '../components/json/friends.json';
import user from '../components/json/user.json';
import data from '../components/json/data.json';
export const App = () => {
  return (
    <>
      <div className={css.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className={css.container}>
        {<Statistics title="Upload stats" stats={data} />}
      </div>

      <div className={css.container}>
        <FriendList friends={friends} />
      </div>

      <div className={css.container}>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
