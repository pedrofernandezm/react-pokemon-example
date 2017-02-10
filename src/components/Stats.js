import React from 'react';

export default function Stats({ pokemon }){
  return(
    <div className="text-left">
      <h3>Stats</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Effort</th>
            <th>Base</th>
          </tr>
        </thead>
        <tbody>
          { pokemon.stats.map(stat => {
              return(
                <tr key={stat.stat.url}>
                  <td>{ stat.stat.name }</td>
                  <td>{ stat.effort }</td>
                  <td>{ stat.base_stat }</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
