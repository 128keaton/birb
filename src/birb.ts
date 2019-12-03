const Twitter = require('twitter-lite');

export class Birb {
    private consumerKey: string = '';
    private consumerSecret: string = '';
    private accessTokenKey: string = '';
    private accessTokenSecret: string = '';

    private twitterInstance: any;

    constructor(consumerKey?: string, consumerSecret?: string, accessTokenKey?: string, accessTokenSecret?: string) {
        this.consumerKey = consumerKey || '';
        this.consumerSecret = consumerSecret || '';
        this.accessTokenKey = accessTokenKey || '';
        this.accessTokenSecret = accessTokenSecret || '';

        if (this.tokensValid()) {
            this.twitterInstance = this.createTwitterInstance();
        }
    }

    public setConsumerKey(consumerKey: string): Birb {
        this.consumerKey = consumerKey;
        return this;
    }

    public setConsumerSecret(consumerSecret: string): Birb {
        this.consumerSecret = consumerSecret;
        return this;
    }

    public setAccessTokenKey(accessTokenKey: string): Birb {
        this.accessTokenKey = accessTokenKey;
        return this;
    }

    public setAccessTokenSecret(accessTokenSecret: string): Birb {
        this.accessTokenSecret = accessTokenSecret;
        return this;
    }

    public getLatestTweet(screenName: string) {
        if (!this.tokensValid() && this.twitterInstance) {
            this.twitterInstance.get('statuses/user_timeline', {screen_name: screenName, count: 1})
                .then((rawResponse: any) => {
                    console.log(rawResponse);
                });
        } else {
            this.displayMissingTokens();
        }
    }

    private createTwitterInstance(): any {
        return new Twitter({
            consumer_key: this.consumerKey,
            consumer_secret: this.consumerSecret,
            access_token_key: this.accessTokenKey,
            access_token_secret: this.accessTokenSecret
        });
    }

    private displayMissingTokens() {
        if (this.consumerKey.length === 0) {
            console.log('Consumer key: unset');
        }

        if (this.consumerSecret.length === 0) {
            console.log('Consumer Secret: unset');
        }

        if (this.accessTokenKey.length === 0) {
            console.log('Access Token Key: unset');
        }

        if (this.accessTokenSecret.length === 0) {
            console.log('Access Token Secret: unset');
        }
    }

    private tokensValid(): boolean {
        return this.consumerKey.length > 0
            && this.consumerSecret.length > 0
            && this.accessTokenKey.length > 0
            && this.accessTokenSecret.length > 0;
    }
}
