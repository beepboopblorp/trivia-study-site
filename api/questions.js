const spreadsheet_id = '1oiQXvLxJO8WXE9OADI4Ss1_znS-WPgpU0-o_ZeyWoWs';

export default async function handler(req, res) {
    try {
        let questions = [];
        let response = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheet_id}/export?gid=0&format=tsv`);
        let data = await response.text();
        do {
            let temp = data.substring(0, data.indexOf('\n'));
            while(temp.indexOf('\t') != -1) {
                let question = "";
                let answer = "";
                if(temp.substring(0, temp.indexOf('\t')) == "") {
                    break;
                } else {
                    question = temp.substring(0, temp.indexOf('\t'));
                    temp = temp.substring(temp.indexOf('\t') + 1);
                    if(temp.indexOf('\t') == -1) {
                        answer = temp.substring(0);
                    } else {
                        answer = temp.substring(0, temp.indexOf('\t'));
                        temp = temp.substring(temp.indexOf('\t') + 1);
                    }
                    questions.push({'Question': question, 'Answer': answer});
                }
            }
            data = data.substring(data.indexOf('\n') + 1);
        } while (data.indexOf('\n') != -1)

        res.status(200).json({'questions': questions});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}