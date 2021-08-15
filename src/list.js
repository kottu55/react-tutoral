const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'java',
    'PHP',
    'Go'
];
export  const List = () => {
    return (
        <div>
            {
                LANGUAGES.map((lang, index) => {
                    return <div key={index}>{ lang }</div>
                })
            }
        </div>
    )
}