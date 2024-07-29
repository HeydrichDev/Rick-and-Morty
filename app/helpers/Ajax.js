export default async function Ajax(props) {
    const { url, success } = props
    
    await fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => success(data))
        .catch(err => console.log(err))
}