import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({location, children}) {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [location])

  return children
}

export default withRouter(ScrollToTop)
