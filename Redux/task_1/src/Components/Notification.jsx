import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removNotify } from '../Redux/action.Type';

export const Notification = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.notification);

  return (
    <>
      <div style={{}}>
        {value &&
          value.map((el) => {
            console.log('🚀 ~ el:', el);
            return (
              <div
                style={{
                  display: 'flow-root',
                  width: '80%',
                  margin: 'auto',
                  padding: '10px 20px',
                  color: 'white',
                  background:
                    el.type === 'success'
                      ? 'green'
                      : el.type === 'error'
                        ? 'red'
                        : 'orange',
                }}
                key={el.id}
              >
                <button
                  style={{ float: 'inline-end', top: '0' }}
                  onClick={() => dispatch(removNotify(el.id))}
                >
                  X
                </button>
                <h1 style={{ textTransform: 'capitalize' }}>
                  {el.msg} - {el.type}
                </h1>
              </div>
            );
          })}
      </div>
    </>
  );
};
