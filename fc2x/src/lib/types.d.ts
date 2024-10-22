export type User = {
    id: number;
    twitter_user_id: string | null;
    farcaster_username: string | null;
    profile_image_url: string | null;
    twitter_access_token: string | null;
    twitter_refresh_token: string | null;
    twitter_token_expires_at: string | null;
    fid: number | null;
    twitter_oauth_token: string | null;
    twitter_oauth_token_secret: string | null;
    is_online: boolean | null;
    slack_access_token: string | null;
    slack_user_id: string | null;
    slack_team_id: string | null;
    slack_token_expires_at: string | null;
    signer_uuid: string | null;
    twitter_username: string | null;
    display_name: string | null;
};