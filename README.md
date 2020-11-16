# Innovate MAP Javascript SDK
Javascript SDK for the [Innovation Map Tanzania](https://innovationmap.co.tz) API.

## Using the SDK
- Grap your api key from [here 🔗](https://innovationmap.co.tz/app/studio/developer/myApps)

- Download the SDK from [here 👉](/dist/innovators-map-tz.umd.js)

- Use it in your project like so

```html
    <script src="path/to/dist/innovators-map-tz.umd.js"></script>
    <script>
        let innovatorsMap;

        window.addEventListener('load', function(){
            innovatorsMap = new InnovatorsMapTz({
                apiKey: "[YOUR API KEY]"
            });
            fetchInnovators();
        });

        async function fetchInnovators(){
            const innovators = await innovatorsMap.getInnovators();
            console.log("Innovators: ", innovators);
        }
    </script>
```

- You can see a full example of how to use the SDK [here 👉](/examples/basic.html)