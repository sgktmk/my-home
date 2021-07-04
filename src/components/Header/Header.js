import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import './style.scss'

export default function Header () {
    const {
      site: {
        siteMetadata: { title },
      },
    } = useStaticQuery (
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )

    return (
        <header id="luxbar" class="luxbar-default">
            <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox"/>
            <div class="luxbar-menu luxbar-menu-right luxbar-menu-light">
                <ul class="luxbar-navigation">
                    <li class="luxbar-header">
                        <a href="/" class="luxbar-brand">Bikpela Poteto Bilong Mi</a>
                        <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
                            id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
                    </li>
                </ul>
            </div>
        </header>
    )
  }
