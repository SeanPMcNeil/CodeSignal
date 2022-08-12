function solution(s) {
    if (s.length == 0){
        return false;
    } else if (s.length == 1){
        return true;
    }

    let freqTable = {};

    for (let i = 0; i < s.length; i++){
        if (!freqTable[s[i]]){
            freqTable[s[i]] = 1;
        } else {
            freqTable[s[i]]++;
        }
    }

    // console.log(freqTable);
    
    if (s.length == 2){
        if (freqTable[s[0]] != 2){
            return false;
        } else {
            return true;
        }
    }

    if (s.length % 2 == 0){
        for (var char in freqTable){
            if (freqTable[char] % 2 != 0){
                return false;
            }
        }
    } else {
        let counter = 0;
        for (var char in freqTable){
            if (freqTable[char] % 2 != 0){
                counter++
            }
        }
        if (counter > 1){
            return false;
        }
    }

    return true;
}
