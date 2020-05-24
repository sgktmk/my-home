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
                        <a href="/" class="luxbar-brand">Ceora</a>
                        <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
                            id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
                    </li>
                    <li class="luxbar-item"><a href="/">Articles</a></li>
                    <li class="luxbar-item"><a href="/pages/photo">Photo</a></li>
                    <li class="luxbar-item"><a href="/pages/music">Music</a></li>
                    <li class="luxbar-item"><a href="/pages/other">Other</a></li>
                    <li class="luxbar-item"><a href="/pages/about">About</a></li>
                    <li class="luxbar-item"><a href="/pages/contact">Contact</a></li>
                </ul>
            </div>
        </header>
    )
  }
