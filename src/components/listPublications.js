import React, { useState } from 'react'

import './styles/stylesListWork.css'
import './styles/PublicationStyle.css'
import './styles/modales.css'
import './styles/searchAnimated.css'

import { ComponentPublication } from './componentMyPublication'
import { NotFoundPublication } from './nonFoundPublication'
import { ImSearch } from 'react-icons/im'

var styleSearch = {
  color: '#757575'
}

function ListPublications(props) {
  const [ query, setQuery ] = useState('')
  const feed = props.feed
  const [ filteredPublication, setFilteredPublication ] = useState(feed)
  React.useMemo(() => {
    const result = feed.filter( publication => {
      return (publication.titleService.toLowerCase().includes(query.toLowerCase()));
    });
    setFilteredPublication(result)
    }, [feed, query])
    const changeQuery = (e)=> {
      setQuery(e.target.value)
  }
  function SearchShort() {
    return (
      <div className="form-group">
        <div className="background-logo-search">
          <ImSearch style={styleSearch} size={'15px'}/>
        </div>
        <input
        autoFocus
        type="text" 
        className="form-control"
        value={query}
        onChange={changeQuery} 
        />
      </div>
    )
  }
  return (
    <ul className="list-unstyled-feed">
      <div className="title-works">
        <div className="col-title">
          <h2 className='title-my-publications'>Mis publicaciones</h2>
        </div>
        <div className="col-search">
          <SearchShort />
        </div>
      </div>
      {
      filteredPublication.length === 0 ? <NotFoundPublication /> : <div>
        {
        filteredPublication.map((dataWork) => {
          return (
            <li key={dataWork.id}>
              <ComponentPublication handleClick={props.handleClick} dataWork={dataWork} />
            </li>
          );
        }).reverse()
        }
      </div>
      }
    </ul>
  )
}

export default ListPublications;