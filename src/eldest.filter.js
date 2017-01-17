export function EldestFilter () {
    return (users) => {
        if (!users instanceof Array || !users) return '';

        let max = users[0];
        users.forEach((user) => {
            if (user.age && user.age > max.age) max = user;
        });

        return max.name;
    }
}