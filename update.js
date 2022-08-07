let timeframes = [
  {
    "title": "work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "self-care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let timeframe = 'monthly'
updateTimeframe(timeframe)

function updateTimeframe(timeframe) {
    previousPrefix = {
      'daily': 'Yesterday',
      'weekly': 'Last week',
      'monthly': 'Last month',
    }
  
    // Set the 
    keys = Object.keys(previousPrefix)
    for (i = 0; i < keys.length; i++) {
      control = document.querySelector(`#control-${keys[i]} button`)
      control.classList.remove('control-active')
    }
    document.querySelector(`#control-${timeframe} button`).classList.add('control-active')

    // Update each stat card
    for (i = 0; i < timeframes.length; i++) {
      title = timeframes[i]['title']
      stat = timeframes[i]['timeframes'][timeframe]
      
      document.querySelector(`#${title} .stat`).textContent = `${stat.current}hrs`
      document.querySelector(`#${title} .stat-previous`).textContent =  `${previousPrefix[timeframe]} - ${stat.previous}hrs`
    }
}

// Only update the HTML once - it'll look better and be faster