import {createClient} from "@supabase/supabase-js"
export const supabase = createClient
(
    "https://iogaelmmphqmiahkfogh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZ2FlbG1tcGhxbWlhaGtmb2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxNTcxNTEsImV4cCI6MjAzNzczMzE1MX0.z12lr2UvoQoHPEI5oeq3f_6lXTawphfa57KEJ3vEC_4"
);