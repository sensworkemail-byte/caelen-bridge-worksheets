-- Drop existing table if it exists and create new one with all required columns
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
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days'),
  keep_record BOOLEAN DEFAULT FALSE
);

-- Create index for auto-deletion
CREATE INDEX idx_contacts_expires_at ON contacts(expires_at) WHERE keep_record = FALSE;

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON contacts FOR INSERT WITH CHECK (true);

-- Create policy to allow admin to view all records
CREATE POLICY "Allow admin to view all" ON contacts FOR SELECT USING (true);
