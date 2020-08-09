<div align="center">
<h3>tz-scrollto</h3>
<p>a scroll-to plugin for my blog</p>

</div>

## Motivation

Enhance in-page navigation experience by scrolling to the element that the `<a href="#hashtag">` linked to so that it feels like taking an elevator.

## Usage

I used this plugin in my blog's React component.

```jsx
import TzScrollTo from 'tz-scrollto'

...
<a href="#test" onClick={e=>{
    e.preventDefault();
    tzScrollTo(e.target,{
        // millisecond
        duration: 600,
        // timing function
        // maybe it's overkill to use a spring animation library like `react-spring`
        easing: 'linear'
    })
    }}
/>

...

```

### spring animation

For those who want to use spring animations, I'd recommend `react-spring`, `react-motion`.
