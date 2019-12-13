import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Logo } from '../../assets/icons';
import { Button } from '../../common/button';
import './Home.css';

class Home extends React.Component<{}, {}> {
  public render() {
    console.log(this.props);
    return (
      <>
        <Helmet>
          <title>eeeeeeee</title>
        </Helmet>
        <div className="Home">
          <div className="Home-header">
            <Logo className="Home-logo" alt="logo" />
            <h2>Welcome to Razzles</h2>
          </div>
          <Button>Napravi upit</Button>
          <p className="Home-intro">
            To get started, edit <code>src/App.tsx</code> or{' '}
            <code>src/Home.tsx</code> and save to reload.
          </p>
          <ul className="Home-resources">
            <li>
              <a href="https://github.com/jaredpalmer/razzle">Docs</a>
            </li>
            <li>
              <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
              <a href="https://palmer.chat">Community Slack</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.counter
});

// function mapDispatchToProps(dispatch: any) {
//   return bindActionCreators(CounterActions, dispatch);
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Home);
