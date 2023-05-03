import Card from './card';
import { posts } from '../util/api';

const Feed = ({user}) => {
    const filteredData = posts.filter(item => item.pinned === true);
    const restOfData = posts.filter(item => item.pinned !== true);
    return (
        <>
            {
                filteredData.map((item) => {
                    return (
                        <Card item={item} user={user} />
                    );
                })
            }
            {
                restOfData.map((item) => {
                    return (
                        <Card item={item} user={user} />
                    );
                })
            }
        </>
    )
}

export default Feed;