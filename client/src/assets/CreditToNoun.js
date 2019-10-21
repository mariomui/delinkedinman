import React from 'react';

const CreditItem = (props) => {
  const { credit } = props;
  return (
    <div>
      <p>
        {/* <text x="0" y="81" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"> */}
        {credit}
        {/* </text> */}
      </p>

    </div>
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