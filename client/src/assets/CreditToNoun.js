import React, { Fragment } from 'react';

const CreditItem = (props) => {
  const { credit } = props;
  return (
    <Fragment>
      <p>
        {/* <text x="0" y="81" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"> */}
        {credit}
        {/* </text> */}
      </p>

    </Fragment>
  )
}


export const Accredit = (props) => {
  const { credits } = props;
  return (
    <footer style={{ lineHeight: .8 }}>
      {
        credits.map((item, i) => {
          return <CreditItem key={i} credit={item} />
        })
      }
      <b>Courtesy of the Noun Project</b>

    </footer>
  )
}