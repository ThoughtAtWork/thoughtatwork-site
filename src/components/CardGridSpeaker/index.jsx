import React from 'react'
import Link from 'gatsby-link'

const CardGridSpeaker = () => (
  <div class="speakers__grid-wrap">
    <div class="speakers__grid grid">
      <h2 class="speakers__grid__header">speakers</h2>
      {% for speaker in speakers %}
        <div class="speaker speakers-card--grid grid__col grid__col--1-of-3 grid__col--m-1-of-2 grid__col--centered">
          <div class="speakers-card__fields">{{speaker.fields}}</div>
          <div class="speakers-card__headshot"><img src=""></div>
          <div class="card">
            <span class="card__header speakers-card__name">{{speaker.firstName}}
              {{speaker.lastName}}</span>
            <span class="card__subhead speakers-card__position">{{speaker.position}}
              {% if speaker.company != '' %}
                at {{speaker.company}}
              {% endif %}
            </span>
            <div class="speakers-card__backing-img">
              <img src="../assets/graphics/TAW-Vis-Dev-6-Edit.jpg">
            </div>
          </div>
          <script type="text/javascript">
            let fieldString = "{{speaker.fields}}";
            let fields = fieldString.split(" | ");
            for(let i = 0; i < fields.length; i++){
              fields[i] = fields[i].replace(/\s/g, '');
              fields[i] = fields[i].toLowerCase();
              $(".speakers-card--grid:last").addClass(fields[i]);
            }
          </script>
        </div>
      {% endfor %}
    </div>
  </div>
)

export default CardGridSpeaker
