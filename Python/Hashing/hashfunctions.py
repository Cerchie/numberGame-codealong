def next_char(char):

    return chr(ord(char)+1)


def awful_hash(phrase):

    return ''.join(next_char(c) for c in phrase)


def slightly_better_hash(phrase):

    return ''.join(next_char(c) for c in phrase[0:8:2])
