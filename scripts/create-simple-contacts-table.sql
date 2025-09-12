-- Drop existing table if it exists and create a new one with correct structure
DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
    id BIGSERIAL PRIMARY KEY,
    preferred_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    text_number TEXT,
    service_interest TEXT,
    response_time TEXT,
    contact_method TEXT NOT NULL,
    message TEXT NOT NULL,
    concern_level INTEGER DEFAULT 5,
    urgency_level INTEGER DEFAULT 5,
    comfort_level INTEGER DEFAULT 5,
    impact_level INTEGER DEFAULT 5,
    readiness_level INTEGER DEFAULT 5,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days')
);

-- Create index for automatic cleanup
CREATE INDEX idx_contacts_expires_at ON contacts(expires_at);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (adjust as needed)
CREATE POLICY "Allow all operations on contacts" ON contacts FOR ALL USING (true);
